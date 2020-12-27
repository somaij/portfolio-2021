import React from "react"

const { Component, Children, PropTypes } = React
var splitWord = "";
var splitPhrase = "";
class SplitText extends Component {
  render(){
    return(
        
        <div aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split(" ").map(function(word, index){
            var splitWord = "";
            word.split("").map(function(letter, index){
                splitWord = splitWord + "<span>" + letter + "</span>";
            })
            return <div dangerouslySetInnerHTML={{__html: splitWord}}></div>
        })}
        </div>
    );
  }
}
export default SplitText