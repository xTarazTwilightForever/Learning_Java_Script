import React, {Component} from "react";
import MenuButton from "./MenuButton.js";
import Menu from "./Menu.js";
class MenuContainer extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible:!this.state.visible
        });
    }



    render() {
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown}
                      menuVisibility={this.state.visible} />
                <div>
                    <p>Find the item that is redundant here:</p>
                    <ul>
                        <li>Twilight</li>
                        <li>Spooky</li>
                        <li>AppleJack</li>
                        <li>Fluttershy</li>
                        <li>Pinkie Pai</li>
                        <li>Rainbow Dash</li>
                        <li>Rarity</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuContainer;