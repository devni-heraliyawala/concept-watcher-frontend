import React, { useState } from "react";
import * as axios from "axios";

import DropDown from "../UI/Dropdown";
import TextArea from "../UI/TextArea";

import {getClassifierCode, getFeatureExtractionCode} from "../../helpers/utils.js"

const flaskApiUrl = "http://127.0.0.1:5000/api/predictions/";

/* eslint-disable jsx-a11y/anchor-is-valid */
const ReviewDetectionSearch = (props) => {
  const featureExtractionTechniques = props.featureExtractionTechniques;
  const classifierTypes = props.classifierTypes;
  const defaultValues = props.defaultValuesReviewDetectionSearch;

  const [ enteredReviewText,setEnteredReviewText] = useState(defaultValues.reviewText );

  const [selectedFeatureExtractionTechnique, setSelectedFeatureExtractionTechnique] = useState(
    defaultValues.featureExtractionTechnique.value
    );

  const [selectedClassifier, setSelectedClassifier] = useState(
    defaultValues.classifierType.value
  );

  const onInputReviewTextHandler = (enteredTextValue) => {
    setEnteredReviewText(enteredTextValue);
  };

  const onChangeClassifierTypeHandler = (selectedDropdownValue) => {
    setSelectedClassifier(selectedDropdownValue);
  };

  const onChangeFeatureExtractionTechniqueHandler = (selectedDropdownValue) => {
    setSelectedFeatureExtractionTechnique(selectedDropdownValue);
  };

  const onClickReviewDetectionSearchHandler = () => {
    var classifier_code = getClassifierCode(selectedClassifier)
    var feature_extraction_code = getFeatureExtractionCode(selectedFeatureExtractionTechnique)

    const requestBody = {
      text: enteredReviewText,
      featureExtractionTechnique: feature_extraction_code,
      classifier: classifier_code,
    };

    axios
      .post(flaskApiUrl, requestBody)
      .then((response) => {
        const data = response?.data;
        if (data) {
          props.onPredictionResultPopulatReviewDetection(data);
        }
      })
      .catch((err) => {
          console.log('error',err)
      });
  };

  return (
    <div className="card bg-base-100 search-panel">
      <div className="card-body overflow-y-auto">
        <h3 className="text-3xl font-bold">Fake Review Detection</h3>

        <div className="divider"></div>
        <TextArea
          labelName="Review Text"
          placeholder="Enter a review to get predictions..."
          value={enteredReviewText}
          onInputTextArea={onInputReviewTextHandler}
        />

        <DropDown
          labelName="Feature Extraction Type"
          placeholder="feature extraction technique"
          dropdownValues={featureExtractionTechniques}
          value={selectedFeatureExtractionTechnique}
          onChangeDropdown={onChangeFeatureExtractionTechniqueHandler}
        />

        <DropDown
          labelName="Classifier Type"
          placeholder="classifier"
          dropdownValues={classifierTypes}
          value={selectedClassifier}
          onChangeDropdown={onChangeClassifierTypeHandler}
        />

        <div className="form-control mt-6">
          <button
            className="btn btn-primary"
            onClick={onClickReviewDetectionSearchHandler}
          >
            Find
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetectionSearch;
