import { motion } from "framer-motion";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  participantName: string;
  referenceNumber: string;
}

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => (
  <>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg shadow-xl w-full max-w-xl overflow-hidden"
        >
          {children}
        </motion.div>
      </motion.div>
    )}
  </>
);

function ThankYouModal({
  isOpen,
  onClose,
  participantName,
  referenceNumber,
}: ThankYouModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-[#002349] px-5 py-3 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-[#957C3D]">Registration Successful</h3>
      </div>
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center text-[#957C3D]">
          Thank you, {participantName}!
        </h2>

        <div className="text-center">
          <p className="text-xl font-medium mb-2 text-[#957C3D]">
            Reference Number: {referenceNumber}
          </p>
        </div>

        <p className="text-gray-700 text-center">
          Your registration has been accepted and is being processed.
        </p>

        <div className="p-4 bg-[#F5E6D3] rounded-md">
          <p className="text-sm text-[#957C3D] text-center font-medium">
            Please take a screenshot of this page for your reference.
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-base font-medium text-white bg-[#002349] rounded-lg hover:bg-[#002349]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#002349] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ThankYouModal; 