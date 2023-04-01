/* eslint-disable jsx-a11y/anchor-is-valid */
import ListItem from "../UI/ListItem";

const PredictionResultPanel = (props) => {
  const reviewResultsList = props.reviewDetectionSearchResults;
  const dataset1Results = reviewResultsList.dataset1
  const dataset2Results = reviewResultsList.dataset2

  return (
    <div className="grow">
      <div className="grid grid-cols-2 gap-4 h-100">
        <div className="news-panel h-100 overflow-y-auto">
          <div className="card bg-base-100">
            <div className="card-body">
              <h3 className="text-3xl font-bold">Dataset 01</h3>
              <div className="content-wrapper">
                <div>
                  {dataset1Results?.map((item) => {
                    return (
                      <ListItem
                        key={Math.random().toString()}
                        item={item}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="news-panel h-100 overflow-y-auto">
          <div className="card bg-base-100">
            <div className="card-body">
              <h3 className="text-3xl font-bold">Dataset 02</h3>

              <div className="content-wrapper">
                <div>
                  {dataset2Results?.map((item) => {
                    return (
                      <ListItem
                        key={Math.random().toString()}
                        item={item}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionResultPanel;
