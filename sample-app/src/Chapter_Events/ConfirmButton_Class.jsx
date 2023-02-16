import React from "react";

class ClassConfirmButton extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isConfirmed: false,
        };

        /** Binding 위해 사용
         * this.handleConfirm = this.handleConfirm.bind(this) 
         */
    }

    /** Non-Arrow Function
     *  handleConfirm() {
            this.setState((prevState) => ({
                isConfirmed: !prevState.isConfirmed,
            }));
        }
     */
    
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        })); 
    }
    
    render(){
        return (
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed} 
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ClassConfirmButton;