class Router extends Component {

    state = {
        path: "/home",
    };

    render() {

        return React.createElement("div", {}, [
            React.createElement(
                "button",
                { onClick: () => this.setState({ path: "/home" }) },
                ["Home"]
            ),
            React.createElement(
                "button",
                { onClick: () => this.setState({ path: "/about" }) },
                ["About"]
            ),
            path === "/home" && React.createElement(Home),
            path === "/about" && React.createElement(About),
        ]);
    }
}
