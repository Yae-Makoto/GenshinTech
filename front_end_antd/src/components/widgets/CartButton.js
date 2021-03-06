import { Button } from "antd";
import { useContext } from "react";
import { Context } from "../../contexts/Context";
import { syncCart } from "../../service/server_connecter";
import { callMsg } from "../../service/ui_modifier";
import { SvgCart } from "./Svg";


export default function CartButton(props) {

    // props
    const _id = props._id;
    const isLite = props.isLite;

    // context
    const { userWhoLogin, shoppingCartIncrease } = useContext(Context)

    // onclick function
    const onClickCartIncrease = () => {
        if (userWhoLogin) {
            var temp = shoppingCartIncrease(_id);
            syncCart(temp);
            callMsg(<h1>Added to cart!</h1>)
        }
    }

    return (
        isLite ?
            <Button type="text" onClick={onClickCartIncrease} style={{ width: '100%' }}>
                <SvgCart />
            </Button>
            :
            <Button onClick={onClickCartIncrease} style={{ width: '100%' }}>
                {props.children}
            </Button>
    );
};
