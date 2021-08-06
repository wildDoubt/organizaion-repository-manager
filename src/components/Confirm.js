import {useDispatch} from "react-redux";
import {Button} from "antd";
import {homeAction} from "../reducers/state";
// 삭제 완료되면 자동으로 Home으로 이동
const Confirm = () => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(homeAction);
    }

    return <>
        Confirm
        <Button onClick={onClick}>Next</Button>
    </>

}

export default Confirm;
