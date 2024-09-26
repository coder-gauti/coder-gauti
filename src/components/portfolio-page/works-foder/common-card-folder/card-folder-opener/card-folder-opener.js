import { Button, Card } from 'antd'
import "./card-folder-opener.scss";
import React from 'react'

const CardFolderOpener = (props) => {
    return (
        <div className=' folder-container'>
            <div className='card-background'></div>
            <Card
                className="card-opener-container"
                // style={{
                //     width: 300,
                //     height: 200,
                // }}
            >

                <div className='card-opener-body'>
                    <h3>{props.title}</h3>
                    <div className='card-body-details'>

                        <div className='details-texts'>
                            {props.icon}
                            <p>Project: <span>{props.varibleName}</span></p>
                        </div>
                        <div className='details-texts'>
                            {props.icon}
                            <p>Client: <spa>{props.clientNaame}</spa></p>
                        </div>
                        <div className='details-texts'>
                            {props.icon}
                            <p>Language: <spa>{props.languageNaame}</spa></p>
                        </div>
                        <div className='details-texts'>
                            {props.icon}
                            <p>Preview: <spa>{props.previewNaame}</spa></p>
                        </div>
                    </div>
                    <figure></figure>
                    {/* <Button></Button> */}
                </div>
            </Card>
        </div>
    )
}

export default CardFolderOpener

