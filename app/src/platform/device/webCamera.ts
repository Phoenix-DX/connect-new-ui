/* The web camera of the OutSystems CameraPlugin, ported 1:1 (PassportScan Q2 (a), user 2026-10-29) from the TST
   scripts in migration/runtime-sources/ that AddDependencies loads (CameraPlugin.controller.js :1-56):
   - CameraPlugin.Errors.js: the error codes (`OS-PLUG-CAMR-000${code}`);
   - CameraPlugin.Camera.js: isMobileOrTablet and WebCamera, which picks the camera view (CameraStream) on a desktop, or
     in a batch, and the camera input (NativeCamera) on a phone or tablet;
   - CameraPlugin.CameraStream.js: the camera view. It hides `parent`, appends its own interface to <body>, streams
     getUserMedia into a <video> and has one control, the white capture button. The browser back button closes it;
   - CameraPlugin.NativeCamera.js: a hidden <input type="file" accept="image/*" capture> that opens the camera of the
     device; the picture goes through a <canvas> to get the file type and quality.
   The image editor (CameraPlugin.ImageEditor.js, CameraPlugin.Cropper.js, Web_EditPhoto) is not ported: no caller sets
   AllowEdit. Plain DOM, as the original: the view lives outside the React tree, next to #reactContainer. */

/** CommonPlugin ErrorRec, as the camera callbacks report it. */
interface CameraError {
  ErrorCode: string;
  ErrorMessage: string;
}

const cameraError = (code: number, message: string): CameraError => ({
  ErrorCode: `OS-PLUG-CAMR-000${code}`,
  ErrorMessage: message,
});

/** CameraErrors (CameraPlugin.Errors.js :1-8). CANCELLED (13) belongs to the image editor, which is not ported. */
export const CAMERA_ERRORS = {
  NOT_SUPPORTED_FILE: cameraError(
    1,
    "The selected file format isn't supported. Select a JPEG or a PNG file and try again.",
  ),
  FILE_ERROR: cameraError(2, "Couldn't upload the selected file."),
  CAMERA_STREAM: cameraError(3, "Couldn't access camera. Check your camera permissions and try again."),
  BROWSER_SUPPORT: cameraError(
    4,
    "Couldn't take photo because the browser doesn't support the MediaDevices API. Check if the version is up to date and supports the required API.",
  ),
} as const;

/** The `params` of Web_TakePhoto's TakePhotoJS (CameraPlugin.controller.js :3974-3982). */
export interface WebCameraParams {
  facingMode: 'user' | 'environment';
  fileType: 'jpeg' | 'png';
  /** Text, as the JS node receives it ("60"): the image quality is quality / 100 */
  quality: string;
  save: boolean;
  height: number;
  width: number;
  inBatch: boolean;
}

/** onSuccess(data): the picture as a data: URL. */
type CameraSuccess = (data: string) => void;
/** onError(errorCode, errorMessage). */
type CameraFailure = (errorCode: string, errorMessage: string) => void;

interface CameraView {
  open: () => Promise<void>;
}

// The two expressions of detectmobilebrowsers.com plus "android|ipad|playbook|silk", copied unchanged from
// CameraPlugin.Camera.js :3 (the escapes too).
/* eslint-disable no-useless-escape */
// prettier-ignore
const MOBILE_AGENT = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
// prettier-ignore
const MOBILE_AGENT_PREFIX = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
/* eslint-enable no-useless-escape */

/** window.isMobileOrTablet (CameraPlugin.Camera.js :1-4). The original falls back to navigator.vendor and
    window.opera for browsers without a user agent. */
export function isMobileOrTablet(userAgent: string = navigator.userAgent): boolean {
  return MOBILE_AGENT.test(userAgent) || MOBILE_AGENT_PREFIX.test(userAgent.slice(0, 4));
}

/** #createAndDownload (CameraPlugin.Camera.js :63-70): SaveToGallery on the web downloads the picture. */
function createAndDownload(data: string): void {
  const downloadNode = document.createElement('a');
  downloadNode.setAttribute('download', `image-${Date.now()}`);
  downloadNode.setAttribute('href', data);
  document.body.appendChild(downloadNode);
  downloadNode.click();
  document.body.removeChild(downloadNode);
}

/** WebCamera (CameraPlugin.Camera.js :7-71). */
export class WebCamera {
  readonly #options: WebCameraParams;
  readonly #onSuccess: CameraSuccess;
  readonly #onError: CameraFailure;
  readonly #camera: CameraView;

  constructor(params: WebCameraParams, parentContainer: HTMLElement, onSuccess: CameraSuccess, onError: CameraFailure) {
    this.#options = params;
    this.#onSuccess = onSuccess;
    this.#onError = onError;

    const cameraInput = document.getElementById('native-input');
    if (cameraInput != null) parentContainer.removeChild(cameraInput);

    const pictureSuccess = (image: string) => {
      this.#onPictureSuccess(image);
    };
    const pictureError: CameraFailure = (errorCode, errorMessage) => {
      this.#onError(errorCode, errorMessage);
    };
    this.#camera =
      !isMobileOrTablet() || this.#options.inBatch
        ? new CameraStream(parentContainer, this.#options, pictureSuccess, pictureError, isMobileOrTablet())
        : new NativeCamera(parentContainer, this.#options, pictureSuccess, pictureError);
  }

  async open(): Promise<void> {
    try {
      await this.#camera.open();
    } catch {
      this.#onError(CAMERA_ERRORS.CAMERA_STREAM.ErrorCode, CAMERA_ERRORS.CAMERA_STREAM.ErrorMessage);
    }
  }

  #onPictureSuccess(image: string): void {
    if (this.#options.save) createAndDownload(image);
    this.#onSuccess(image);
  }
}

/** CameraStream (CameraPlugin.CameraStream.js): the camera view. */
class CameraStream implements CameraView {
  readonly #parent: HTMLElement;
  readonly #options: WebCameraParams;
  readonly #onSuccess: CameraSuccess;
  readonly #onError: CameraFailure;
  readonly #isMobile: boolean;

  readonly #wrapper = document.createElement('div');
  readonly #canvas = document.createElement('canvas');
  readonly #videoDisplay = document.createElement('video');
  #buttonWrapper: HTMLDivElement | undefined;
  #aspectRatio = 0;

  #videoStream: MediaStream | undefined;
  #videoTrack: MediaStreamTrack | undefined;
  #isOpen = false;

  #orientationMatch: MediaQueryList | undefined;
  readonly #onOrientation = () => {
    this.#onOrientationChange();
  };
  readonly #onBackButtonCallback = () => {
    this.#onBackButton();
  };
  readonly #onVideoLoaded = () => {
    this.#onVideoLoad();
  };

  constructor(
    parent: HTMLElement,
    options: WebCameraParams,
    onSuccess: CameraSuccess,
    onError: CameraFailure,
    isMobile: boolean,
  ) {
    this.#parent = parent;
    this.#options = options;
    this.#onSuccess = onSuccess;
    this.#onError = onError;
    this.#isMobile = isMobile;

    // history.pushState(null, null, null): the back button then closes the view instead of leaving the screen
    history.pushState(null, '', null);
    this.#build();
  }

  async open(): Promise<void> {
    const mediaDevices = navigator.mediaDevices as Partial<MediaDevices>;
    if (mediaDevices.getUserMedia === undefined) {
      this.close();
      this.#onError(CAMERA_ERRORS.BROWSER_SUPPORT.ErrorCode, CAMERA_ERRORS.BROWSER_SUPPORT.ErrorMessage);
    } else {
      try {
        this.#buildOnOrientationEvents();
        this.#videoStream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: { facingMode: this.#options.facingMode, aspectRatio: { exact: this.#aspectRatio } },
        });
        this.#videoTrack = this.#videoStream.getVideoTracks()[0];
        this.#videoDisplay.srcObject = this.#videoStream;
      } catch {
        this.close();
        this.#onError(CAMERA_ERRORS.CAMERA_STREAM.ErrorCode, CAMERA_ERRORS.CAMERA_STREAM.ErrorMessage);
      }
    }
  }

  close(): void {
    this.#clear();
    window.removeEventListener('popstate', this.#onBackButtonCallback, true);
    this.#videoDisplay.removeEventListener('loadedmetadata', this.#onVideoLoaded, false);
    document.body.removeChild(this.#wrapper);
    this.#parent.style.display = 'block';
  }

  /** Closes the stream. */
  #clear(): void {
    this.#videoDisplay.pause();
    this.#videoTrack?.stop();
    this.#orientationMatch?.removeEventListener('change', this.#onOrientation, false);
    this.#videoStream = undefined;
    this.#isOpen = false;
    this.#videoDisplay.srcObject = null;
  }

  #onTakePhotoClick(e: MouseEvent): void {
    e.preventDefault();
    let finalWidth = this.#wrapper.clientWidth;
    let finalHeight = this.#wrapper.clientHeight;

    if (this.#options.width != 0 && this.#options.height != 0) {
      const ratio = Math.max(
        this.#options.height / this.#wrapper.clientHeight,
        this.#options.width / this.#wrapper.clientWidth,
      );
      finalWidth = this.#wrapper.clientWidth * ratio;
      finalHeight = this.#wrapper.clientHeight * ratio;
    }

    this.#canvas.width = finalWidth;
    this.#canvas.height = finalHeight;

    const ctx = this.#canvas.getContext('2d');
    // the original calls drawImage on the context as it is: without one, the click fails and the view stays open
    if (ctx === null) throw new TypeError('The canvas has no 2d context');
    ctx.drawImage(this.#videoDisplay, 0, 0, this.#canvas.width, this.#canvas.height);
    const data = this.#canvas.toDataURL(`image/${this.#options.fileType}`, Number(this.#options.quality) / 100);

    this.close();
    this.#onSuccess(data);
  }

  #buildButton(): void {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'camera-button-wrapper';
    const cameraButton = document.createElement('button');
    cameraButton.id = 'camera-white-button';
    cameraButton.className = 'camera-button';

    // landscape
    if (window.innerHeight < window.innerWidth && this.#isMobile) {
      buttonWrapper.classList.add('camera-button-wrapper-landscape');
      cameraButton.classList.add('camera-button-landscape');
    }

    buttonWrapper.appendChild(cameraButton);
    this.#wrapper.appendChild(buttonWrapper);
    this.#buttonWrapper = buttonWrapper;

    cameraButton.onclick = (e) => {
      this.#onTakePhotoClick(e);
    };
  }

  #removeButton(): void {
    if (this.#buttonWrapper != undefined) this.#wrapper.removeChild(this.#buttonWrapper);
  }

  #onOrientationChange(): void {
    if (this.#isOpen) {
      this.#clear();
      this.#removeButton();
      void this.open();
    }
  }

  #buildOnOrientationEvents(): void {
    // landscape
    if (window.innerHeight < window.innerWidth) this.#aspectRatio = window.innerWidth / window.innerHeight;
    else this.#aspectRatio = window.innerHeight / window.innerWidth;

    this.#orientationMatch = window.matchMedia('(orientation: portrait)');
    this.#orientationMatch.addEventListener('change', this.#onOrientation, false);
  }

  #onBackButton(): void {
    // if we're back in the main page, we don't want to prevent default mobile behaviour
    if (this.#isOpen) this.close();
  }

  #onVideoLoad(): void {
    void this.#videoDisplay.play();
    this.#isOpen = true;
    this.#buildButton();
  }

  #build(): void {
    this.#wrapper.id = 'camera-interface';
    this.#wrapper.className = 'camera-wrapper';

    this.#canvas.id = 'camera-canvas';
    this.#canvas.className = 'camera-canvas';
    this.#wrapper.appendChild(this.#canvas);

    this.#videoDisplay.id = 'camera-video';
    this.#videoDisplay.className = 'camera-video';
    this.#videoDisplay.setAttribute('playsinline', '');
    this.#videoDisplay.addEventListener('loadedmetadata', this.#onVideoLoaded, false);
    this.#wrapper.appendChild(this.#videoDisplay);

    // detecting mobile back button so it can behave like the native version
    window.addEventListener('popstate', this.#onBackButtonCallback, true);

    this.#parent.style.display = 'none';
    document.body.appendChild(this.#wrapper);
  }
}

/** NativeCamera (CameraPlugin.NativeCamera.js): the camera input of a phone or tablet. */
class NativeCamera implements CameraView {
  readonly #parent: HTMLElement;
  readonly #options: WebCameraParams;
  readonly #onSuccess: CameraSuccess;
  readonly #onError: CameraFailure;
  readonly #inputElement = document.createElement('input');

  constructor(parent: HTMLElement, options: WebCameraParams, onSuccess: CameraSuccess, onError: CameraFailure) {
    this.#parent = parent;
    this.#onSuccess = onSuccess;
    this.#onError = onError;
    this.#options = options;
    this.#build();
  }

  open(): Promise<void> {
    this.#inputElement.click();
    return Promise.resolve();
  }

  async #onLoad(reader: FileReader): Promise<void> {
    // readAsDataURL: the result is the data: URL text
    let content = typeof reader.result === 'string' ? reader.result : '';
    const base64Index = content.indexOf(';base64,');
    const actualContent = content.slice(base64Index);
    content = `data:image/${this.#options.fileType}${actualContent}`;

    content = await this.#prepareImage(content);

    this.#parent.removeChild(this.#inputElement);
    this.#onSuccess(content);
  }

  /** Draws the picture on a canvas to apply the size, file type and quality. */
  #prepareImage(data: string): Promise<string> {
    return new Promise((resolve) => {
      const image = new Image();
      image.src = data;
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        let ratio = 1;

        if (this.#options.width != 0 && this.#options.height != 0)
          ratio = Math.max(this.#options.height / image.height, this.#options.width / image.width);

        canvas.width = image.width * ratio;
        canvas.height = image.height * ratio;

        // as in CameraStream: the original draws on the context as it is
        if (ctx === null) throw new TypeError('The canvas has no 2d context');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL(`image/${this.#options.fileType}`, Number(this.#options.quality) / 100));
      };
    });
  }

  #onInput(): void {
    const file = this.#inputElement.files?.[0];
    if (!file) {
      this.#parent.removeChild(this.#inputElement);
      this.#onError(CAMERA_ERRORS.FILE_ERROR.ErrorCode, CAMERA_ERRORS.FILE_ERROR.ErrorMessage);
    } else if (!file.type.includes('image/')) {
      this.#parent.removeChild(this.#inputElement);
      this.#onError(CAMERA_ERRORS.NOT_SUPPORTED_FILE.ErrorCode, CAMERA_ERRORS.NOT_SUPPORTED_FILE.ErrorMessage);
    } else {
      const reader = new FileReader();
      reader.onload = () => {
        void this.#onLoad(reader);
      };
      reader.readAsDataURL(file);
    }
  }

  #build(): void {
    this.#inputElement.id = 'native-input';
    this.#inputElement.setAttribute('accept', 'image/*');
    this.#inputElement.setAttribute('capture', this.#options.facingMode);
    this.#inputElement.setAttribute('type', 'file');
    this.#inputElement.style.display = 'none';

    this.#parent.appendChild(this.#inputElement);
    this.#inputElement.onchange = () => {
      this.#onInput();
    };
  }
}
