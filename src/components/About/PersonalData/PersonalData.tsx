import { FaEnvelope, FaPhoneAlt, FaUser, FaBirthdayCake, FaFlag } from "react-icons/fa";
import { IconText } from "../../Shared";

export function PersonalData() {
  return (
    <section className="space-y-2 mt-5">
      <IconText 
        icon={<FaEnvelope/>} 
        text="israel.tuglema14@gmail.com"
      />
           <IconText 
        icon={<FaPhoneAlt/>} 
        text="+593 0997700125"
      />
           <IconText 
        icon={<FaUser/>} 
        text="Bryan Israel Tuglema Mangia"
      />
           <IconText 
        icon={<FaBirthdayCake/>} 
        text="14/01/2001"
      />
           <IconText 
        icon={<FaFlag/>} 
        text="Ecuador"
      />
    </section>
  );
}
