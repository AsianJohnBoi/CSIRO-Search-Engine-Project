import React, { Component } from 'react'
import {connect} from 'react-redux';
import styled from 'styled-components';
import { 
    closeSuggestionBox, 
    updateSearchKeyword,
    addSearchHistory,
    fetchResults 
} from '../actions/index'

const Wrapper = styled.div`
    color: black;
    background-color: white;
    position: absolute;
    height: auto;
    text-align: left;
    z-index: 12;
    top: 2.74rem;
    width: 70%;
    border-radius: 0px 5px;
    border: .5px solid black;
`;

const Word = styled.p`
    margin: 1rem;
    cursor: pointer;
    text-transform: capitalize;
`;

class SuggestionBox extends Component {

    componentWillMount(){
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = e => {
        if (this.node.contains(e.target)){
            // The click is inside, Continute to whatever you are doing
            return 
        }
        // Click is outside
        this.props.closeSuggestionBox();
    }

    onSuggestKeywordClicked = (word) => {
        this.props.fetchResults(word);
        this.props.addSearchHistory(word);
        this.props.updateSearchKeyword(word);
        this.props.closeSuggestionBox();
    }

    render(){
        const results = [];
        if (this.props.suggestBox.suggestions.length === 0) return <div ref={node => this.node = node} ></div>

        this.props.suggestBox.suggestions.forEach(suggest => {
            if (results.length === 10) return 
            results.push(<Word onClick={e => this.onSuggestKeywordClicked(suggest)} key={suggest}>{suggest}</Word>);
        })

        return (
            <Wrapper style={ this.props.suggestBox.show ? {} : {display: "none"} }
                ref={node => this.node = node} 
                className="suggestions">
                {results}
            </Wrapper>
        )
    }
}

const mapStateToProps = ({suggestBox}) => ({suggestBox})

export default connect(mapStateToProps, { 
    closeSuggestionBox, 
    updateSearchKeyword,
    addSearchHistory,
    fetchResults
})(SuggestionBox);