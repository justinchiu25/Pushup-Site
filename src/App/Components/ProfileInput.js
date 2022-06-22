import react, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserCompletedPushUp } from "../Redux/User";

export default function ProfileInput( { user } ) {
    const [error, setError] = useState();
    const pushUpRef = useRef();
    const dispatch = useDispatch();
    function handleSubmit(evt) {
        evt.preventDefault();
        const pushUpValue = Math.floor(+pushUpRef.current.value)
        if (!isNaN(pushUpValue) && pushUpValue > 0 && pushUpValue <= user.pushUp){
            dispatch(updateUserCompletedPushUp(user,pushUpValue))
            evt.target.reset();
        } else {
            console.log("Please enter valid (Set error here)");
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="text-white"> How many push ups completed </label>
            <> </>
            <input type="text" ref={pushUpRef} />
            <button type="submit"> Submit </button>
        </form>
    )
}