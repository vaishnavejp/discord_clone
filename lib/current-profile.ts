import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

const currentProfile = async () => {

    const {userId} = auth();

    if(!userId) {
        return null;
    }

    const profile = db.profile.findUnique({
        where: {
            userId
        }
    });

    return profile;
}
 
export default currentProfile;