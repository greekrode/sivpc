import { X, Video } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoGuidelinesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoGuidelinesModal = ({
  isOpen,
  onClose,
}: VideoGuidelinesModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#314e61]/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white backdrop-blur-sm p-8 rounded-md border border-[#d9cdb8] shadow-md max-w-4xl max-h-[90vh] overflow-y-auto relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#c9a86b] hover:text-[#5e4b3b] transition-colors"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="mb-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 mb-2">
                <Video className="w-8 h-8 text-[#c9a86b]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#c9a86b]">
                  Video Submission Guidelines
                </h2>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
            </div>
          </div>

          <div className="space-y-12">
            <p className="text-[#5e4b3b] text-lg leading-relaxed">
              To ensure fairness and uniformity, all participants must strictly
              comply with the following requirements for video submissions:
            </p>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  Recording Requirements
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  The video must clearly and continuously display both the
                  performer and the instrument for the entire performance.
                </li>
                <li>
                  Performances must be recorded in a single, uninterrupted take,
                  with no editing of any kind.
                </li>
                <li>
                  Professional recording equipment is not required; however, the
                  video and audio must be of acceptable quality, with minimal
                  background noise.
                </li>
                <li>
                  Recordings must be produced within three (3) months prior to
                  submission.
                </li>
                <li>All works must be performed from memory.</li>
                <li>
                  For piano participants, the camera must clearly capture:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      The performer’s face (from the top of the head to
                      mid-torso)
                    </li>
                    <li>The hands and fingers on the keyboard</li>
                    <li>Pedal usage</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  Technical Specifications
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  <span className="font-semibold">Video Orientation:</span>{" "}
                  Landscape or Portrait mode is acceptable.
                </li>
                <li>
                  <span className="font-semibold">Resolution:</span> Minimum
                  720p; recommended 1920 × 1080 (HD).
                </li>
                <li>
                  <span className="font-semibold">Platform:</span> Videos must
                  be uploaded to YouTube, with the link provided in the
                  registration form.
                </li>
                <li>
                  <span className="font-semibold">Description:</span> The video
                  description must include the participant’s full name,
                  composer, and complete title of the piece.
                </li>
                <li>
                  <span className="font-semibold">Privacy Settings:</span>{" "}
                  Ensure the video is accessible to the Festival Organizers.
                </li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  Additional Conditions
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  No changes to the repertoire will be allowed after the
                  registration form has been submitted.
                </li>
                <li>
                  Participants are responsible for ensuring full compliance with
                  all guidelines before submission.
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={onClose}
              className="px-10 py-5 bg-[#ffb703] text-black font-bold tracking-wider uppercase text-base inline-flex items-center gap-3 rounded-md transition-all duration-300 hover:bg-[#ffb703]/90"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoGuidelinesModal;
