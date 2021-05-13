import React, {Component} from 'react';

const Details = [
    {id:'01', content:'hello, world'},
    {id:'02', content:'hello, react'},
    {id:'03', content:'hello, future'}
]
class Detail extends Component {

    render() {
        const {id, title} = this.props.match.params
        let Detail = Details.find((detailObj) =>{
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>DETAIL:{Detail.content}</li>
            </ul>
        );
    }
}

export default Detail;