import React, { useState } from "react";
//import router?
import './menu.css';
import menuItem from "../assets/images/hotDrink.jpg";

function MenuItem(props) {
    return (
        <div className="menu-item">
            <div className="menu-item-name">
                {props.name}
            </div>
            <div className="image-price-flex">
                <img className="menu-item-img" src={props.itemImage} />
                <div className="prices">
                    <div className="itemRate small">
                        <div>Small</div>   <div>${props.price[0]}</div>
                    </div>
                    <div className="itemRate medium">
                        <div>Medium</div>   <div>${props.price[1]}</div>
                    </div>
                    <div className="itemRate large">
                        <div>Large</div>   <div>${props.price[2]}</div>
                    </div>
                </div>
            </div>
            <div className="menu-item-description">
                {props.description}
            </div>
        </div>
    )
}

function HotMenu() {
    return (
        <div className="menu-portion">
        <div className="itemsContainer">
            <MenuItem itemImage={menuItem} name="Mocha" price={[3.50, 4.50, 4.99]} description="A delicous, creamy coffee mixed with mocha" />
            <MenuItem itemImage={menuItem} name="Americano" price={[3.50, 4.50, 4.99]} description="Traditional Dark Flavor" />
            <MenuItem itemImage={menuItem} name="Mocha" price={[3.50, 4.50, 4.99]} description="A delicous, creamy coffee mixed with mocha" />
            <MenuItem itemImage={menuItem} name="Americano" price={[3.50, 4.50, 4.99]} description="Traditional Dark Flavor" />
            <MenuItem itemImage={menuItem} name="Mocha" price={[3.50, 4.50, 4.99]} description="A delicous, creamy coffee mixed with mocha" />
            <MenuItem itemImage={menuItem} name="Americano" price={[3.50, 4.50, 4.99]} description="Traditional Dark Flavor" />
            <MenuItem itemImage={menuItem} name="Mocha" price={[3.50, 4.50, 4.99]} description="A delicous, creamy coffee mixed with mocha" />
            <MenuItem itemImage={menuItem} name="Americano" price={[3.50, 4.50, 4.99]} description="Traditional Dark Flavor" />
            <MenuItem itemImage={menuItem} name="Mocha" price={[3.50, 4.50, 4.99]} description="A delicous, creamy coffee mixed with mocha" />
            <MenuItem itemImage={menuItem} name="Americano" price={[3.50, 4.50, 4.99]} description="Traditional Dark Flavor" />
            <MenuItem itemImage={menuItem} name="Mocha" price={[3.50, 4.50, 4.99]} description="A delicous, creamy coffee mixed with mocha" />
            <MenuItem itemImage={menuItem} name="Americano" price={[3.50, 4.50, 4.99]} description="Traditional Dark Flavor" />
        </div>
    </div>  
    )
}

function ColdMenu() {
    return (
        <div className="menu-portion">
            <div className="itemsContainer">
                <MenuItem itemImage={menuItem} name="Iced Mocha" price={[3.50, 4.50, 4.99]} description="A delicous, creamy coffee mixed with mocha" />
                <MenuItem itemImage={menuItem} name="Iced Americano" price={[3.50, 4.50, 4.99]} description="Traditional Dark Flavor" />
                <MenuItem itemImage={menuItem} name="Iced Mocha" price={[3.50, 4.50, 4.99]} description="A delicous, creamy coffee mixed with mocha" />
                <MenuItem itemImage={menuItem} name="Iced Americano" price={[3.50, 4.50, 4.99]} description="Traditional Dark Flavor" />
                <MenuItem itemImage={menuItem} name="Iced Mocha" price={[3.50, 4.50, 4.99]} description="A delicous, creamy coffee mixed with mocha" />
                <MenuItem itemImage={menuItem} name="Iced Americano" price={[3.50, 4.50, 4.99]} description="Traditional Dark Flavor" />
                <MenuItem itemImage={menuItem} name="Iced Mocha" price={[3.50, 4.50, 4.99]} description="A delicous, creamy coffee mixed with mocha" />
                <MenuItem itemImage={menuItem} name="Iced Americano" price={[3.50, 4.50, 4.99]} description="Traditional Dark Flavor" />
            </div>
        </div>
    )
}

function MenuNavButton(props){
    if(!props.selected){
        return (
            <h2>
                {props.title}
            </h2>
        )
    }else{
        return (
            <h2 className="menuNavButtonSelected">
                {props.title}
            </h2>
        )
    }
}


function MenuComponent() {
    const [menu, setMenu] = useState(true);
    var menuType = menu ? <HotMenu/> : <ColdMenu/>
    var hotButton = <MenuNavButton title="Hot Drinks" selected={menu}/>
    var coldButton = <MenuNavButton title="Cold Drinks" selected={!menu}/>
    return (
        <div className="menu-body">
            <h1> Menu </h1>
            <div className="menuNav">
                <div className="menuNavButton" onClick={() => setMenu(true)}>
                    {hotButton}
                </div>
                <div className="menuNavButton" onClick={() => setMenu(false)}>
                    {coldButton}
                </div>
            </div>
            {menuType}
        </div>
    )
}


export default MenuComponent;