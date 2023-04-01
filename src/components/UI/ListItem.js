/* eslint-disable react/style-prop-object */

const ListItem = (props) => {
  const item = props.item;

  return (
    <div className="card card-side bg-base-100 shadow-xl news-article-list-item">
      <div className="card-body p-5">
        <h2 className="card-title">
          Concept Drift Detection Method : {item?.cdd_method}
        </h2>
        <p>
          <b>Prediction Result : </b>
          {item?.is_fake ? "Fake" : "Genuine"}
        </p>
        {/* <p>
          <b>Explanation : </b>
          {item?.explanation}
        </p> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <b>Accuracy : </b>
            {item?.accuracy} %
          </div>
          <div style={{ textAlign: "left", flex: 1 }}>
            <b>Mean Squared Error: </b>
            {item?.mse}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <b>Precision : </b>
            {item?.precision} %
          </div>
          <div style={{ textAlign: "left", flex: 1 }}>
            <b>Drift Count: </b>
            {item?.drift_count}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <b>Recall: </b>
            {item?.recall} %
          </div>
          <div style={{ textAlign: "left", flex: 1 }}>
            <b>Training Time <small>(hh:mm:ss)</small>: </b>
            {item?.training_time}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <b>F1-Score: </b>
            {item?.f1_score}
          </div>
          <div style={{ textAlign: "left", flex: 1 }}>
            <b>Memory Used: </b>
            {item?.memory_used.toFixed(2)} MB
          </div>
        </div>

      </div>
    </div>
  );
};

export default ListItem;
