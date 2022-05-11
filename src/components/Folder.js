import { useState } from 'react'
import File from './File'

function Folder(props) {
    const [open, setOpen] = useState(false)
    function toggleOpen() {
        setOpen(oldOpen => !oldOpen)
    }
    return (
        <div>
            <div onClick={toggleOpen}><span>{'📁 '}</span>{props.folderData.name}</div>
            <div style={{paddingLeft: 10, display: open ? 'block' : 'none'}}>
                {
                    props.folderData.content <= 0 ?
                    'Folder empty' :
                    props.folderData.content.map(child => {
                        const isFolder = child.type === 'dir'
                        if(isFolder) return <Folder folderData={child}/> // this is a recursive call
                        else return <File>{child.name}</File>
                    })
                }
            </div>
        </div>
    )
}

export default Folder
