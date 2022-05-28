import React from 'react'

const Show = (props) => {
    const {results,info}=props;
  return (
    <div className="show ">
      <div className="show_info">
        {info ? `About results: ${info.totalResults}` : ""}
        {/* if there is any information print it else an empty string */}
      </div>
      {results.length > 0
        ? results.map((result) => (
            <div className="show_details">
              <div className="show_link">
                <a href={result.displayLink}>{result.displayLink}</a>
              </div>
              <div className="show_title">
                <a href={result.link}>{result.title}</a>
              </div>
              <div className="show_description">
                <p>{result.snippet}</p>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}

export default Show