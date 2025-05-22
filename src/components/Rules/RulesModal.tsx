import { X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RulesModal = ({ isOpen, onClose }: RulesModalProps) => {
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
                <FileText className="w-8 h-8 text-[#c9a86b]" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#c9a86b]">
                  Rules & Regulations
                </h2>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  1. General Rules
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  Every participant must adhere to the regulations of the
                  competition.
                </li>
                <li>
                  Participants may enter one or more categories based on their
                  age and skill level.
                </li>
                <li>
                  Participants under the age of 18 must obtain consent from a
                  parent or guardian.
                </li>
                <li>
                  This competition is open to all Singaporean Citizens and
                  foreigners not represented by agents or management as
                  professionals.
                </li>
                <li>
                  Participants are expected to conduct themselves in a
                  respectful and professional manner at all times.
                </li>
                <li>
                  Inappropriate or disruptive behavior may result in
                  disqualification.
                </li>
                <li>Participants must dress appropriately.</li>
                <li>
                  Competitors who arrive late may be disqualified at the
                  discretion of the organizer.
                </li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  2. Performance Guidelines
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  All pieces must be performed from memory; sheet music is not
                  allowed on stage.
                </li>
                <li>
                  Participants entering more than one category may use the same
                  piece(s) for the selected category.
                </li>
                <li>
                  Participants cannot change their selected piece after
                  registration closes.
                </li>
                <li>
                  Time limits for performances will be strictly enforced. Judges
                  reserve the right to stop performances that exceed the time
                  limit.
                </li>
                <li>
                  The piano model used for the competition is: Yamaha Grand
                </li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  3. Judging & Awards
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  Performances will be judged by a panel of qualified
                  adjudicators selected by the organizers.
                </li>
                <li>
                  Judging criteria include:
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Technical proficiency</li>
                    <li>Musicality</li>
                    <li>Interpretation</li>
                    <li>Stage presence</li>
                  </ul>
                </li>
                <li>
                  The judges' decisions are final and not subject to appeal.
                </li>
                <li>
                  If a participant studies under a jury member, that jury member
                  must abstain from scoring or giving comments. The Artistic
                  Director will replace them for feedback.
                </li>
                <li>
                  Every participant will receive:
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>A trophy</li>
                    <li>A certificate</li>
                    <li>A digital feedback form</li>
                  </ul>
                </li>
                <li>
                  Selected participants may be invited to a FREE Masterclass
                  with the adjudicators.
                </li>
                <li>
                  The jury and organizers reserve the right to withhold prizes
                  if deemed necessary.
                </li>
                <li>
                  All prizes and awards are non-transferable and
                  non-exchangeable.
                </li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  4. Registration
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  All participants must:
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Complete the online registration form</li>
                    <li>Submit PDF sheet music via the registration form</li>
                    <li>Pay the registration fee to be officially entered</li>
                  </ul>
                </li>
                <li>
                  Each registration includes one FREE ticket for a guardian.
                </li>
                <li>
                  Extra tickets to competition and gala concert: S$20 per person
                  (available at the venue)
                </li>
                <li>
                  Reservation is needed for gala concert, first come first serve
                  (limited seats)
                </li>
                <li>No refunds under any circumstances.</li>
                <li>Participant age is calculated as of December 13, 2025.</li>
                <li>
                  The rundown and performance order will be emailed at least one
                  week before the event.
                </li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  5. Media & Consent
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  The organizers may record and livestream performances for
                  promotional and archival use.
                </li>
                <li>
                  By participating, you grant permission for your images,
                  recordings, and videos to be used for marketing purposes.
                </li>
                <li>
                  Tripods and professional cameras are not allowed for personal
                  recording.
                </li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  6. Liability
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  The organizers, sponsors, and affiliated parties are not
                  liable for any loss, injury, or inconvenience during the
                  event.
                </li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  7. Announcement of Results
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  Results will be posted on:
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>The official Website</li>
                    <li>The competition's Instagram page</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  8. Final Provisions
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  By registering, participants agree to abide by all terms and
                  conditions.
                </li>
                <li>
                  Organizers reserve the right to amend these rules at any time
                  without prior notice.
                </li>
                <li>
                  Providing false or incomplete participant data may lead to
                  disqualification.
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

export default RulesModal;
