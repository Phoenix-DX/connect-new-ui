
class ImageEditor {

  /** ------- Class Variables ------- **/
  #callbacks = {
    'onSuccess': undefined,
    'onError': undefined,
    'onDoneClicked': undefined,
    'onImageLoaded':undefined,
    'onImageIsReady':undefined,
    'onCancelClicked': undefined,
    'onFlipClicked': undefined,
    'onRotateClicked': undefined,
    'onBackButtonClicked': undefined
  }

  #options = {
    'image': undefined,
    'fileType': 'JPEG',
    'quality': 0,
  }

  #icons = {
    'rotate': '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.6931 15.5827C32.3739 17.1675 32.7143 18.8304 32.7143 20.5715C32.7143 22.3126 32.3739 23.9755 31.6931 25.5603C31.0123 27.1452 30.0971 28.5124 28.9475 29.6619C27.798 30.8115 26.4308 31.7266 24.846 32.4074C23.2612 33.0882 21.5982 33.4287 19.8571 33.4287C17.9375 33.4287 16.1127 33.0241 14.3828 32.2149C12.6529 31.4058 11.1797 30.2646 9.96316 28.7914C9.88504 28.6798 9.84877 28.5542 9.85435 28.4147C9.85993 28.2752 9.90736 28.1608 9.99664 28.0715L12.2902 25.7612C12.4018 25.6608 12.5413 25.6106 12.7087 25.6106C12.8873 25.6329 13.0156 25.6999 13.0937 25.8115C13.9085 26.8717 14.9074 27.692 16.0904 28.2724C17.2734 28.8528 18.529 29.1429 19.8571 29.1429C21.0178 29.1429 22.1256 28.9169 23.1802 28.4649C24.2349 28.0129 25.1473 27.4019 25.9174 26.6318C26.6875 25.8617 27.2985 24.9493 27.7506 23.8946C28.2026 22.8399 28.4286 21.7322 28.4286 20.5715C28.4286 19.4108 28.2026 18.3031 27.7506 17.2484C27.2985 16.1937 26.6875 15.2813 25.9174 14.5112C25.1473 13.7411 24.2349 13.1301 23.1802 12.6781C22.1256 12.2261 21.0178 12.0001 19.8571 12.0001C18.7634 12.0001 17.7143 12.1982 16.7098 12.5944C15.7053 12.9906 14.8125 13.557 14.0312 14.2936L16.3248 16.6039C16.6708 16.9387 16.7489 17.3237 16.5592 17.759C16.3694 18.2054 16.0402 18.4286 15.5714 18.4286H8.07143C7.78125 18.4286 7.53013 18.3226 7.31808 18.1106C7.10603 17.8985 7 17.6474 7 17.3572V9.85721C7 9.38846 7.22321 9.05922 7.66964 8.86949C8.10491 8.67976 8.48995 8.75788 8.82477 9.10386L11.0011 11.2635C12.1953 10.1362 13.5597 9.2629 15.0943 8.64348C16.6289 8.02407 18.2165 7.71436 19.8571 7.71436C21.5982 7.71436 23.2612 8.05476 24.846 8.73557C26.4308 9.41637 27.798 10.3316 28.9475 11.4811C30.0971 12.6307 31.0123 13.9978 31.6931 15.5827L31.6931 15.5827Z" fill="#fff"/></svg>',
    'mirror': '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.682 19.8181C34.894 20.0302 35 20.2813 35 20.5715C35 20.8617 34.894 21.1128 34.682 21.3248L30.3962 25.6106C30.1842 25.8226 29.9331 25.9286 29.6429 25.9286C29.3527 25.9286 29.1016 25.8226 28.8895 25.6106C28.6775 25.3985 28.5715 25.1474 28.5715 24.8572V22.7143H11.4286V24.8572C11.4286 25.1474 11.3225 25.3985 11.1105 25.6106C10.8984 25.8226 10.6473 25.9286 10.3571 25.9286C10.067 25.9286 9.81584 25.8226 9.60379 25.6106L5.31808 21.3248C5.10603 21.1128 5 20.8617 5 20.5715C5 20.2813 5.10603 20.0302 5.31808 19.8181L9.60379 15.5324C9.81584 15.3204 10.067 15.2144 10.3571 15.2144C10.6473 15.2144 10.8984 15.3204 11.1105 15.5324C11.3225 15.7445 11.4286 15.9956 11.4286 16.2858V18.4286H28.5715V16.2858C28.5715 15.9956 28.6775 15.7445 28.8895 15.5324C29.1016 15.3204 29.3527 15.2144 29.6429 15.2144C29.9331 15.2144 30.1842 15.3204 30.3962 15.5324L34.682 19.8181Z" fill="#fff"/></svg>'
  }

  #parentContainer = undefined;
  #cropper = null;

  #editor = {
    'editorContainer': undefined,
    'imageWrapper': undefined,
    'editingImage': undefined,
    'doneButton': undefined,
    'cancelButton': undefined,
    'flipButton': undefined,
    'rotateButton': undefined,
    'loading': undefined
  }

  /**
   * 
   * @param {HTMLElement} parentContainer 
   * @param {function (image)} onSuccess 
   * @param {function ()} onError 
   * @param {Options object} options 
   */
  constructor(parentContainer, onSuccess, onError, options){
    this.#callbacks.onSuccess = onSuccess;
    this.#callbacks.onError = onError;
    this.#options = options;
    this.#parentContainer = parentContainer;

    this.#build();

  }

  /** ------- Public Mehtods ------- **/

  start() {
    this.#editor.editingImage.src = `data:image/${this.#options.fileType};base64, ` + this.#options.image;
    this.#parentContainer.style.display = 'none';
  }

  /**
   * Clears the editor
   * Meaning it clears all event listeners and
   * removes the UI
   */
  close() {
    this.#cropper.destroy();
    this.#cropper = null;
    
    //removing all event listenevers
    this.#editor.rotateButton.removeEventListener('click', this.#callbacks.onRotateButton, true);
    this.#editor.flipButton.removeEventListener('click', this.#callbacks.onFlipButton, false);
    this.#editor.doneButton.removeEventListener('click', this.#callbacks.onDoneClicked, false);
    this.#editor.cancelButton.removeEventListener('click', this.#callbacks.onCancelClicked, false);
    this.#editor.editingImage.removeEventListener('ready', this.#callbacks.onImageIsReady, false);

    window.removeEventListener('popstate', this.#callbacks.onBackButtonClicked, false);

    document.body.removeChild(this.#editor.editorContainer);
    document.body.removeChild(this.#editor.loading);

    this.#parentContainer.style.display = 'block';

  }
  
  /** ------- Private Mehtods ------- **/

  /**
   * What happens when the user finishes the editing and signals it
   * uses the cropper.js lib to get the cropped information from the canvas
   * and closes the editor, calling the success page.
   */
  #onDoneButton() {
    if(this.#cropper){
      var canvas = this.#cropper.getCroppedCanvas();
      var data = canvas.toDataURL(`image/${this.#options.fileType}`);

      this.close();
      this.#callbacks.onSuccess(data);
    }
  }

  /**
   * Function responsible to init the cropper
   */
  #startCropper(){
    this.#cropper = new Cropper(this.#editor.editingImage, {
      background: false,
      movable: false,
      viewMode: 0,
      dragMode: "move",
      zoomOnWheel: false,
      zoomOnTouch: false,
      autoCropArea: 1,
      /**
       * function that is fired when the canvas (image wrapper) or the crop box is changing.
       * Here we use it to make sure the crop box isn't bigger than the original pic sizes.
      */
       crop: function() {
        var cropper = this.cropper;
          var cropBoxData = cropper.getCropBoxData();
          var canvasData = cropper.getCanvasData();
          var finalHeight = cropBoxData.height;
          var finalWidth = cropBoxData.width;
          var finalTop = cropBoxData.top;
          var finalLeft = cropBoxData.left;
          var fixCropBox = false;

          if (canvasData.height < cropBoxData.height) {
            finalHeight = canvasData.height;
            finalTop = canvasData.top;
            fixCropBox = true;
          } 
          if (canvasData.width < cropBoxData.width) {
            fixCropBox = true;
            finalWidth = canvasData.width;
            finalLeft = canvasData.left;
          }

          if(canvasData.top > cropBoxData.top || canvasData.top + canvasData.height < cropBoxData.top){
            fixCropBox = true;
            finalTop = canvasData.top;
          }
          if(fixCropBox){
            cropper.setCropBoxData({
              left: finalLeft,
              top: finalTop,
              height: finalHeight,
              width: finalWidth
            });
          }
      }
    });
  }

  /**
   * Event handler for the image loading event
   * Responsible of initilizing the cropper when the first loads
   */
  #onImageLoad() {
    this.#startCropper();
    this.#editor.editingImage.removeEventListener('load', this.#callbacks.onImageLoaded, false);
  }

  /**
   * Event handler for the image ready event
   * This means not displaying the loading spinner
   * Also is called when the image is replaced by the rotate action
   */
  #onImageReady(){
    this.#editor.loading.style.display = 'none';
  }

  /**
   * Function called when the mobile back button or previous page
   */
  #onBackButton(event) {
    //if we're back in the main page, we don't want to prevent default mobile behaviour
    if(this.#cropper){
      history.pushState(null, '', '#home');
      this.close();
    }
    event.preventDefault();
  }

  /**
   * Function that is called when the cancel button is called
   */
  #onCancelButton(){
    if(this.#cropper){
      this.close();
      this.#callbacks.onError(CameraErrors.CANCELLED.getErrorCode(), CameraErrors.CANCELLED.getMessage());
    }
  }

  /**
   * Function that replaces the "main" image
   * with the rotate image
   */
  #replaceImage(){
    //using that cropping area to create a new picture (now rotated) to 
    //create a new container (aka new Cropper) with the new image
    var newImage = this.#cropper.getCroppedCanvas();
    var url = newImage.toDataURL(`image/${this.#options.fileType}`);
    this.#editor.editingImage.src = url;
    
    //now for the container to be updated, we need to destroy
    //and initialize the cropper
    this.#cropper.destroy();
    this.#startCropper();
  }

  /**
   * Calls the cropper library 
   * and rotates 90 degrees to the left 
   * followed by a zoom out so the full picture is seen
   * ---
   * In this function , we call a time out because toDataURL is
   * a UI blocking function and we need to enough time for the spinner
   * to be placed on the UI and then to the UI blocking operation
   */
  #onRotateButton(){
      if(this.#cropper){
        //showing the spinner
        this.#editor.loading.style.display = 'flex';

        //saving previous sizes
        var previousCanvas = this.#cropper.getCanvasData();      

        this.#cropper.rotate(-90);

        var canvasRotate = this.#cropper.getCanvasData();

        //after rotation we need to zoom out the image 
        //so we can see it all
        //hence, we see which dimension (height or width) had the biggest change in size
        //and we zoom that out
        var zoomOut = Math.max(previousCanvas.height/canvasRotate.height, previousCanvas.width/canvasRotate.width)
        this.#cropper.zoom(-zoomOut);
        
        //now the container is either too small or too big for the image
        //so we need to fit it to the image, so the user doesnt cut over "non existent pic pixels"
        //to do that, we need to put the crop box with the same size as the scaled pic
        var canvas = this.#cropper.getCanvasData();
        
        this.#cropper.setCropBoxData({left: canvas.left, top: canvas.top, width: canvas.width, height: canvas.height});
        var replaceFunction = this.#replaceImage.bind(this);
        
        //the function toDataURL is an UI blocking function
        //we need to set a timeout otherwise the spinner wont even be shown
        setTimeout(replaceFunction, 10);
      }

  }

  /**
   * Flips the image horizontally
   */
  #onFlipButton(){
    if(this.#cropper){
      this.#cropper.scaleX(-this.#cropper.getData().scaleX || -1);
    }
  }

  /**
   * Method which main purpose is to build all the necessary UI
   * and initate all the necessary event listeners
   */
  #build() {
    //editor wrapper container
    this.#editor.editorContainer = document.createElement('div');
    this.#editor.editorContainer.id = 'image-editor';
    this.#editor.editorContainer.className = 'editor-container';

    //editor
    var editor = document.createElement('div');
    editor.className = 'editor';

    //image wrapper
    this.#editor.imageWrapper = document.createElement('div');
    this.#editor.imageWrapper.id = 'image-wrapper';
    this.#editor.imageWrapper.className = 'image-wrapper';
    
    //image
    this.#editor.editingImage = document.createElement('img');
    this.#editor.editingImage.id = 'editing-image';

    //tools wrapper
    var toolsContainer = document.createElement('div');
    toolsContainer.id = 'tool-container';
    toolsContainer.className = 'tool-container';
    
    //rows
    var firstRow = document.createElement('div');
    firstRow.className = 'row';
    var secondRow = document.createElement('div');
    secondRow.className = 'row';

    //done button
    var doneWrapper = document.createElement('div');
    doneWrapper.className = 'tool-button done-wrapper';
    this.#editor.doneButton = document.createElement('button');
    this.#editor.doneButton.className = 'done-button';
    this.#editor.doneButton.innerHTML = 'OK';
    doneWrapper.appendChild(this.#editor.doneButton);

    //cancel button
    var cancelWrapper = document.createElement('div');
    cancelWrapper.className = 'tool-button cancel-wrapper';
    this.#editor.cancelButton = document.createElement('button');
    this.#editor.cancelButton.className = 'cancel-button';
    this.#editor.cancelButton.innerHTML = 'Cancel';
    cancelWrapper.appendChild(this.#editor.cancelButton);

    //flip button
    this.#editor.flipButton = document.createElement('div');
    this.#editor.flipButton.id = 'flip-button';
    this.#editor.flipButton.className = 'tool-button flip-button'
    this.#editor.flipButton.innerHTML = this.#icons.mirror;

    //rotate button
    this.#editor.rotateButton = document.createElement('div');
    this.#editor.rotateButton.id = 'rotate-button';
    this.#editor.rotateButton.className = 'tool-button rotate-button'
    this.#editor.rotateButton.innerHTML = this.#icons.rotate;

    //loading spinner
    this.#editor.loading = document.createElement('div');
    this.#editor.loading.className = 'loader-container';
    var spinner = document.createElement('div');
    spinner.className = 'spinner';
    this.#editor.loading.appendChild(spinner);
    document.body.appendChild(this.#editor.loading);

    //putting the pieces together
    this.#editor.imageWrapper.appendChild(this.#editor.editingImage);

    editor.appendChild(this.#editor.imageWrapper);
    this.#editor.editorContainer.appendChild(editor);
    
    firstRow.appendChild(this.#editor.flipButton);
    firstRow.appendChild(this.#editor.rotateButton);

    secondRow.appendChild(cancelWrapper);
    secondRow.appendChild(doneWrapper);
    
    toolsContainer.appendChild(secondRow);
    toolsContainer.appendChild(firstRow);

    this.#editor.editorContainer.appendChild(toolsContainer);
    document.body.appendChild(this.#editor.editorContainer);

    //event listeners
    this.#callbacks.onImageLoaded = this.#onImageLoad.bind(this);
    this.#editor.editingImage.addEventListener('load', this.#callbacks.onImageLoaded, false);

    this.#callbacks.onImageIsReady = this.#onImageReady.bind(this);
    this.#editor.editingImage.addEventListener('ready', this.#callbacks.onImageIsReady, false);
    
    this.#callbacks.onFlipClicked = this.#onFlipButton.bind(this);
    this.#editor.flipButton.addEventListener('click', this.#callbacks.onFlipClicked, false);

    this.#callbacks.onRotateClicked = this.#onRotateButton.bind(this);
    this.#editor.rotateButton.addEventListener('click', this.#callbacks.onRotateClicked, false);

    this.#callbacks.onDoneClicked = this.#onDoneButton.bind(this);
    this.#editor.doneButton.addEventListener('click', this.#callbacks.onDoneClicked, false);

    this.#callbacks.onCancelClicked = this.#onCancelButton.bind(this);
    this.#editor.cancelButton.addEventListener('click', this.#callbacks.onCancelClicked, false);

    this.#callbacks.onBackButtonClicked = this.#onBackButton.bind(this);
    window.onpopstate = this.#callbacks.onBackButtonClicked;

    history.pushState(null, '', '');

  }

}