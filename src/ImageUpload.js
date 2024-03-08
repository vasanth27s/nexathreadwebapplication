import React from 'react';
import './imageUpload.css'; 

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: null };
        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                file: URL.createObjectURL(img)
            });
            this.props.onFileUpload(img);
        }
    }

    render() {
        return (
            <div className="image-upload-container">
                <h2>Upload your image</h2>
                <label htmlFor="file-upload" className="custom-file-input">
                    
                </label>
                <input id="file-upload" type="file" onChange={this.onImageChange} />
                {this.state.file && <img className="image-preview" src={this.state.file} alt="Uploaded" />}
            </div>
        );
    }
}

export default ImageUpload;