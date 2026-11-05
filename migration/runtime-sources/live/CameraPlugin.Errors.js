class CameraErrors {
    #message;
    #code;
    static NOT_SUPPORTED_FILE = new CameraErrors(1, "The selected file format isn't supported. Select a JPEG or a PNG file and try again.");
    static FILE_ERROR = new CameraErrors(2, "Couldn't upload the selected file.");
    static CAMERA_STREAM = new CameraErrors(3, "Couldn't access camera. Check your camera permissions and try again.");
    static BROWSER_SUPPORT = new CameraErrors(4, "Couldn't take photo because the browser doesn't support the MediaDevices API. Check if the version is up to date and supports the required API.");
    static CANCELLED = new CameraErrors(13, "Couldn't edit photo because the process was canceled.")

    constructor(code, message) {
        this.#message = message;
        this.#code = code;
    }

    getErrorCode() {
        return `OS-PLUG-CAMR-000${this.#code}`
    }

    getMessage() {
        return this.#message;
    }
}