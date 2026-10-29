class NativeCamera {

    #parent = undefined;
    #onSuccess = undefined;
    #onError = undefined;
    
    #inputElement = undefined;

    #options = {
        'facingMode': 'environment',
        'fileType': 'PNG',
        'quality': 0,
        'save': false,
        'height': undefined,
        'width': undefined,
        
    }

    constructor(parent, options, onSuccess, onError){
        this.#parent = parent;
        this.#onSuccess = onSuccess;
        this.#onError = onError;
        this.#options = options;
        this.#build();
    }


    async open(){
        this.#inputElement.click();
    }

    async #onLoad(reader) {
        var content = reader.result;
        var base64Index = content.indexOf(";base64,");
        var actualContent = content.substr(base64Index);
        content = `data:image/${this.#options.fileType}`+ actualContent;    
        
        content = await this.#prepareImage(content);

        this.#parent.removeChild(this.#inputElement);
        this.#onSuccess(content);
    }

    #prepareImage(data){
        return new Promise((resolve) => {
            var image = new Image();
            image.src = data;
            image.onload = () => {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var ratio = 1;

                if( this.#options.width != 0  && this.#options.height != 0) 
                    ratio = Math.max(this.#options.height /image.height, this.#options.width/image.width);

                canvas.width = image.width * ratio;
                canvas.height = image.height * ratio;

                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                var res = canvas.toDataURL(`image/${this.#options.fileType}`, this.#options.quality/100);
                resolve(res);
            }

        });
    }

    #onInput(e){
        var file = e.target.files[0];
        if (!file){
            this.#parent.removeChild(this.#inputElement);
            this.#onError(CameraErrors.FILE_ERROR.getErrorCode(), CameraErrors.FILE_ERROR.getMessage());
        } else if (!file.type.includes('image/')) {
            this.#parent.removeChild(this.#inputElement);
            this.#onError(CameraErrors.NOT_SUPPORTED_FILE.getErrorCode(), CameraErrors.NOT_SUPPORTED_FILE.getMessage());
        } else {
            var reader = new FileReader();
            // Closure to capture the file information
            reader.onload = this.#onLoad.bind(this, reader);
            // Read in the image file as a data URL.
            reader.readAsDataURL(file);        
        }
    }

    #build(){
        // Setup input element
        this.#inputElement = document.createElement('input');
        this.#inputElement.id = 'native-input';
        this.#inputElement.setAttribute('accept', 'image/*');
        this.#inputElement.setAttribute('capture', this.#options.facingMode);
        this.#inputElement.setAttribute('type', 'file');
        this.#inputElement.style.display = 'none';
        
        // Add element to DOM
        this.#parent.appendChild(this.#inputElement);
        this.#inputElement.onchange = this.#onInput.bind(this);
    }
}