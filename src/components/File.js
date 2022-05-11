function File(props) {
    const extension = props.children.split('.').pop();

    return (<div><span>{'{'}📄 {extension}{'}'} </span>{props.children}</div>)
}

export default File
