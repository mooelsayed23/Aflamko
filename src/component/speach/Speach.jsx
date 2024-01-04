import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function SpeechToTextComponent() {
  const { listening } = useSpeechRecognition();

  return (
    <>
      <div
        className="modal fade position-fixed top-0 z-3"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0 ">
            <div className="modal-header border-0 ">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                <i>{listening ? "جاري الأستماع ..." : "أضغط للبدأ ..."}</i>
              </h1>
              <button
                type="button"
                className="btn-close m-0"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="m-auto ">
                {listening ? (
                  <>
                    <button
                      onClick={SpeechRecognition.stopListening}
                      className={`listening ${listening && " rec "}`}
                    >
                      ايقاف
                    </button>
                  </>
                ) : (
                  <button
                    onClick={SpeechRecognition.startListening}
                    className={`listening ${listening && " rec  "}`}
                  >
                    تشغيل
                  </button>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <i>المايكريفون: {listening ? "يعمل" : "متوقف"}</i>
            </div>
          </div>
        </div>
      </div>

      {/* <button onClick={resetTranscript}>Reset</button> */}
      {/* <p> {transcript}</p> */}
    </>
  );
}

export default SpeechToTextComponent;
