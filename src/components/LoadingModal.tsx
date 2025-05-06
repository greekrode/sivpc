import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

interface LoadingModalProps {
  isOpen: boolean;
}

const Modal = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) => (
  <>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
        >
          {children}
        </motion.div>
      </motion.div>
    )}
  </>
);

function LoadingModal({ isOpen }: LoadingModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <div className="p-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Loading Spinner */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-marigold"></div>

          {/* Loading Message */}
          <div className="text-center space-y-3">
            <h3 className="text-lg font-semibold text-[#957C3D]">
              Processing Registration
            </h3>
            <p className="text-base text-[#957C3D]">
              Please wait while we process your registration...
            </p>
            <div className="mt-4 p-4 bg-[#F5E6D3] rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationTriangleIcon
                    className="h-5 w-5 text-[#957C3D]"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-[#957C3D]">
                    Please do not close this page. Closing the page will void
                    your registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default LoadingModal;
