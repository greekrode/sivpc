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
                  General Rules
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>Every participant must comply with the regulations of the festival.</li>
                <li>Participants may enter one or more categories according to their age and skill level.</li>
                <li>For multiple category entries, applicants must submit separate applications and pay the required fee for each division.</li>
                <li>Participants under 18 years of age must obtain consent from a parent or guardian.</li>
                <li>Participation is open to individuals of all nationalities, including Singapore citizens, permanent residents, and international participants, whether residing locally or abroad.</li>
                <li>Participants are expected to conduct themselves respectfully and professionally at all times.</li>
                <li>Inappropriate or disruptive behavior may result in disqualification.</li>
                <li>Proper attire is required for all performances.</li>
                <li>Participants who arrive late may be disqualified at the discretion of the Organizer.</li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  Performance Guidelines
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>All pieces must be performed from memory; the use of sheet music on stage is not permitted.</li>
                <li>Participants entering more than one category may present the same repertoire across categories.</li>
                <li>
                  Repertoire Changes:
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Participants may change their repertoire before the registration deadline on 15 November 2025.</li>
                    <li>Requests must be submitted via email or WhatsApp, including the participant’s full name, festival category, original piece, and new piece.</li>
                    <li>This rule applies only to the <span className="font-semibold">Live Festival</span> registration.</li>
                    <li>No changes will be accepted after the deadline.</li>
                  </ul>
                </li>
                <li>Performance time limits will be strictly observed. Judges reserve the right to stop any performance that exceeds the allotted time.</li>
                <li>The official festival piano model is: Yamaha Grand C5.</li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  Judging & Awards
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <div className="space-y-10 text-[#5e4b3b]">
                <div>
                  <h4 className="text-xl font-bold text-[#c9a86b] mb-3">1. Adjudication Panel</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>All performances shall be evaluated by a panel of qualified adjudicators appointed by the Organizing Committee.</li>
                    <li>
                      Judging will be based on the following criteria:
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Technical Proficiency</li>
                        <li>Musicality</li>
                        <li>Interpretation</li>
                        <li>Stage Presence</li>
                      </ul>
                    </li>
                    <li>The decisions of the adjudicators are final and are not subject to appeal.</li>
                    <li>In cases where a participant is currently, or has recently been, a student of a jury member, that jury member will abstain from scoring or commenting on the participant’s performance. Feedback in such cases will be provided by another jury member or the Artistic Director.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#c9a86b] mb-3">2. Awards and Recognition</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>
                      All participants will receive recognition for their performance as follows:
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          Trophies
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Live participants will receive a trophy based on their score.</li>
                            <li>Virtual participants who achieve high scores will also receive a trophy if they are able to attend the prize winner concert.</li>
                          </ul>
                        </li>
                        <li>
                          Scoring Levels:
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Gold Award: 85–100 marks</li>
                            <li>Silver Award: 75–84 marks</li>
                            <li>Bronze Award: 65–74 marks</li>
                          </ul>
                          <p className="italic mt-2">(Scores below 65 will receive a Certificate of Participation only.)</p>
                        </li>
                        <li>
                          Certificates
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Live participants will receive a printed Certificate.</li>
                            <li>Virtual participants will receive an E-Certificate.</li>
                          </ul>
                        </li>
                        <li>
                          Feedback
                          <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>All participants will be provided with a Digital Feedback Form.</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>The Jury and Organizers reserve the right to withhold any prize or award if deemed necessary.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#c9a86b] mb-3">Special Awards</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Free Masterclass Award: Granted to selected outstanding participants, as determined by the jury, and conducted by distinguished jury members.</li>
                    <li>High Scorer Award: Presented to the top participant in each category with a minimum of 92 marks.</li>
                    <li>Prizes: A combined total of up to S$1,200 will be distributed, which includes free masterclasses, cash prizes and trophies for both live and virtual high scorers.</li>
                    <li>Outstanding Teaching Certificate: Awarded to teachers whose students achieve the High Scorer Award in the festival.</li>
                    <li>
                      High-Scorer Awards Criteria:
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>Eligible Categories: Baroque, Classical, Romantic, 20th Century, Exam Category and Free Choice Category</li>
                        <li>Awarded to the highest-scoring participant in the category</li>
                        <li>Minimum score: 92 marks</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#c9a86b] mb-3">3. Special Privileges</h4>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>Selected High Scorer Award recipients and participants in the Virtual Festival will be invited to perform at the Prize Winner Concert.</li>
                    <li>Award recipients will receive a Free Pass to the upcoming competition without the requirement for pre-screening. Further details will be announced via the official website and social media channels.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  4. General Conditions
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>All prizes and awards are strictly non-transferable and non-exchangeable.</li>
                <li>The high scorer from each category will be invited to perform in the prize winner concert, in the evening of 13th December 2025. Awards will be forfeited if the winners are not able to attend the prize winner concert.</li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  Registration
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  All participants must:
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Complete the online registration form</li>
                    <li>Submit PDF sheet music via the registration form</li>
                    <li>Attach the YouTube link / URL for participants who join the Virtual Festival</li>
                    <li>Pay the registration fee to be officially entered.</li>
                  </ul>
                </li>
                <li>Participants who apply for more than one division, applicants must complete separate applications and pay the required fee for each individual division.</li>
                <li>Each registration for the live festival includes one FREE guardian admission ticket.</li>
                <li>Extra tickets to the festival and prize winner concert : S$15 per person (available at the venue).</li>
                <li>Participants who participated in either live or virtual festival that are invited to perform at the prize winner concert will be given two FREE guardian admission tickets.</li>
                <li>No refunds under any circumstances.</li>
                <li>Participant age is calculated as of December 13, 2025.</li>
                <li>The rundown and performance order will be emailed at least one week before the event.</li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  Media & Consent
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>The organizers may record and livestream performances for promotional and archival use.</li>
                <li>By participating, you grant permission for your images, recordings, and videos to be used for marketing purposes.</li>
                <li>Tripods and professional cameras are not allowed for personal recording.</li>
                <li>Participants who purchase the professional video recording and photography service will receive their media files via email in softcopy format within 14 working days after the competition.</li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  Liability
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>The organizers, sponsors and affiliated parties are not liable for any loss, injury, or inconvenience during the event.</li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  Announcement of Results
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>
                  Results will be posted on:
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>The official Website</li>
                    <li>The competition's Instagram page</li>
                    <li>Virtual Festival results will also be sent through email.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <div className="inline-block mb-5">
                <h3 className="text-2xl font-bold text-[#c9a86b] mb-2">
                  Final Provisions
                </h3>
                <div className="h-[1px] w-full bg-gradient-to-r from-[#c9a86b] to-transparent" />
              </div>
              <ul className="list-disc pl-6 space-y-3 text-[#5e4b3b]">
                <li>By registering, participants agree to abide by all terms and conditions.</li>
                <li>Organizers reserve the right to amend these rules at any time without prior notice.</li>
                <li>Providing false or incomplete participant data may lead to disqualification.</li>
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
