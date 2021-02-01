export class Component {
    constructor(props) {
        this.props = props
        this.state = {}
        this.previousState;
        this.renderIfShouldUpdate = null;
    }

    //on utilise les fonction fléché pour keep le this
    display = () => {
        if (this.shouldUpdate()) {
            this.renderIfShouldUpdate = this.render();
            return this.renderIfShouldUpdate;
        }
    }

    // Should update compare les anciens props avec les nouveaux et de même pour l'état
    shouldUpdate = () => {
        return (this.props != this.newProps || this.state != this.previousState)
    }

}