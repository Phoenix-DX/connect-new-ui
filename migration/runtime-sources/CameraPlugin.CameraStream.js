class CameraStream {
    #parent = undefined;
    #onSuccess = undefined;
    #onError = undefined;
    #isMobile = false;

    #cameraInterface = {
        'wrapper': undefined,
        'buttonWrapper': undefined,
        'cameraButton': undefined,
        'videoDisplay': undefined,
        'canvas': undefined,
        'aspectRatio': 0
    };

    #camera = {
        'streaming': false,
        'photo': undefined,
        'videoStream': undefined,
        'videoTrack': undefined,
        'isOpen': false
    }

    #options = {
        'facingMode': 'environment',
        'fileType': 'JPEG',
        'quality': 0,
        'save': false,
        'height': undefined,
        'width': undefined,
    }

    #orientation = {
        'orientationMatch': undefined,
        'onOrientation': undefined
    }

    #callbacks = {
        'onBackButtonCallback' : undefined,
        'onVideoLoaded': undefined
    }
    

    constructor(parent, options, onSuccess, onError, isMobile) {
        this.#parent = parent;
        this.#options = options;
        this.#onSuccess = onSuccess;
        this.#onError = onError;
        this.#isMobile = isMobile;

        history.pushState(null, null, null);
        this.#build()
    }
    

    async open() {
        if(navigator.mediaDevices.getUserMedia === undefined){
            this.close();
            this.#onError(CameraErrors.BROWSER_SUPPORT.getErrorCode(), CameraErrors.BROWSER_SUPPORT.getMessage());
        } else {
            try {
                await this.#buildOnOrientationEvents();
                
                this.#camera.videoStream = await navigator.mediaDevices.getUserMedia({ audio: false,
                    video:  {facingMode: this.#options.facingMode, aspectRatio:  {exact: this.#cameraInterface.aspectRatio}} });
                
                this.#camera.videoTrack = this.#camera.videoStream.getVideoTracks()[0];
                this.#cameraInterface.videoDisplay.srcObject = this.#camera.videoStream;
            } catch(err) {
                this.close();
                this.#onError(CameraErrors.CAMERA_STREAM.getErrorCode(), CameraErrors.CAMERA_STREAM.getMessage());
            };
        }
    }

    close() {
        this.#clear();

        window.removeEventListener('popstate', this.#callbacks.onBackButtonCallback, true);
        this.#cameraInterface.videoDisplay.removeEventListener('loadedmetadata', this.#callbacks.onVideoLoaded, false);
       
        document.body.removeChild(this.#cameraInterface.wrapper);
        this.#parent.style.display = 'block';
   }

   #clear(){
        //closing the stream
        if(this.#cameraInterface.videoDisplay){
            this.#cameraInterface.videoDisplay.pause();
        }

        if(this.#camera.videoTrack){
            this.#camera.videoTrack.stop();
        }

        if(this.#orientation.orientationMatch != undefined){
            this.#orientation.orientationMatch.removeEventListener('change', this.#orientation.onOrientation, false);
        }

        this.#camera.videoStream = undefined;
        this.#camera.isOpen = false;
        this.#cameraInterface.videoDisplay.srcObject = null;
   }

    #onTakePhotoClick(e){
        e.preventDefault();
        var finalWidth = this.#cameraInterface.wrapper.clientWidth;
        var finalHeight = this.#cameraInterface.wrapper.clientHeight;

        if( this.#options.width != 0  && this.#options.height != 0) {
            var ratio = Math.max(this.#options.height /this.#cameraInterface.wrapper.clientHeight, this.#options.width/this.#cameraInterface.wrapper.clientWidth);
            finalWidth = this.#cameraInterface.wrapper.clientWidth * ratio;
            finalHeight = this.#cameraInterface.wrapper.clientHeight * ratio;
        }   

        this.#cameraInterface.canvas.width = finalWidth;
        this.#cameraInterface.canvas.height = finalHeight;

        var ctx =  this.#cameraInterface.canvas.getContext('2d');
        ctx.drawImage(this.#cameraInterface.videoDisplay, 0, 0, this.#cameraInterface.canvas.width, this.#cameraInterface.canvas.height);
        var data = this.#cameraInterface.canvas.toDataURL(`image/${this.#options.fileType}`, this.#options.quality/100);
        
        this.close();
        this.#onSuccess(data);
    }

    #buildButton(){
        this.#cameraInterface.buttonWrapper = document.createElement('div');
        this.#cameraInterface.buttonWrapper.className = 'camera-button-wrapper';
        this.#cameraInterface.cameraButton = document.createElement('button');
        this.#cameraInterface.cameraButton.id = 'camera-white-button';
        this.#cameraInterface.cameraButton.className = 'camera-button';

        //landscape
        if(window.innerHeight < window.innerWidth && this.#isMobile){
            this.#cameraInterface.buttonWrapper.classList.add("camera-button-wrapper-landscape");
            this.#cameraInterface.cameraButton.classList.add("camera-button-landscape");
        }

        this.#cameraInterface.buttonWrapper.appendChild(this.#cameraInterface.cameraButton);
        this.#cameraInterface.wrapper.appendChild(this.#cameraInterface.buttonWrapper);

        this.#cameraInterface.cameraButton.onclick = this.#onTakePhotoClick.bind(this);
    }

    #removeButton(){
        if(this.#cameraInterface.buttonWrapper != undefined) 
            this.#cameraInterface.wrapper.removeChild(this.#cameraInterface.buttonWrapper);
    }

    #onOrientationChange(event) {
        if(this.#camera.isOpen){
            this.#clear();
            this.#removeButton();
            this.open();
        }
    }    

    #buildOnOrientationEvents() {
        //landscape
        if(window.innerHeight < window.innerWidth)
            this.#cameraInterface.aspectRatio = window.innerWidth / window.innerHeight;
        else this.#cameraInterface.aspectRatio = window.innerHeight / window.innerWidth;

        this.#orientation.orientationMatch = window.matchMedia("(orientation: portrait)");
        this.#orientation.onOrientation = this.#onOrientationChange.bind(this);
        this.#orientation.orientationMatch.addEventListener('change', this.#orientation.onOrientation, false);
    }

    #onBackButton() {
        //if we're back in the main page, we don't want to prevent default mobile behaviour
        if(this.#camera.isOpen){
            this.close();
        }
    }

    #onVideoLoad() {
        this.#cameraInterface.videoDisplay.play();
        this.#camera.isOpen = true;
        this.#buildButton();
    }

    #build(){
        this.#cameraInterface.wrapper = document.createElement('div');
        this.#cameraInterface.wrapper.id = 'camera-interface';
        this.#cameraInterface.wrapper.className = 'camera-wrapper';

        this.#cameraInterface.canvas = document.createElement('canvas');
        this.#cameraInterface.canvas.id = 'camera-canvas';
        this.#cameraInterface.canvas.className = 'camera-canvas';

        this.#cameraInterface.wrapper.appendChild(this.#cameraInterface.canvas);

        this.#cameraInterface.videoDisplay = document.createElement('video');
        this.#cameraInterface.videoDisplay.id = 'camera-video';
        this.#cameraInterface.videoDisplay.className = 'camera-video';
        this.#cameraInterface.videoDisplay.setAttribute('playsinline', '');

        this.#callbacks.onVideoLoaded = this.#onVideoLoad.bind(this);
        this.#cameraInterface.videoDisplay.addEventListener('loadedmetadata', this.#callbacks.onVideoLoaded, false);

        this.#cameraInterface.wrapper.appendChild(this.#cameraInterface.videoDisplay);

        //detecting mobile back button so it can behave like the native version
        this.#callbacks.onBackButtonCallback =  this.#onBackButton.bind(this)
        window.addEventListener('popstate' ,this.#callbacks.onBackButtonCallback, true);

        this.#parent.style.display = 'none';
        document.body.appendChild(this.#cameraInterface.wrapper);
    }
}