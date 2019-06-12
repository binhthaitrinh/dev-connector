import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
const AddExperience = ({ history, addExperience }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 class="large text-primary">Add An Experience</h1>
      <p class="lead">
        <i class="fas fa-code-branch" /> Add any developer/programming positions
        that you have had in the past
      </p>
      <small>* = required field</small>
      <form
        class="form"
        onSubmit={e => {
          e.preventDefault();
          addExperience(formData, history);
        }}>
        <div class="form-group">
          <input
            value={title}
            onChange={e => onChange(e)}
            type="text"
            placeholder="* Job Title"
            name="title"
            required
          />
        </div>
        <div class="form-group">
          <input
            value={company}
            onChange={e => onChange(e)}
            type="text"
            placeholder="* Company"
            name="company"
            required
          />
        </div>
        <div class="form-group">
          <input
            value={location}
            onChange={e => onChange(e)}
            type="text"
            placeholder="Location"
            name="location"
          />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input
            value={from}
            onChange={e => onChange(e)}
            type="date"
            name="from"
          />
        </div>
        <div class="form-group">
          <p>
            <input
              value={current}
              check={current}
              onChange={e => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
              type="checkbox"
              name="current"
            />{' '}
            Current Job
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input
            disabled={toDateDisabled ? 'disabled' : ''}
            type="date"
            name="to"
            value={to}
            onChange={e => onChange(e)}
          />
        </div>
        <div class="form-group">
          <textarea
            value={description}
            onChange={e => onChange(e)}
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          />
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { addExperience }
)(withRouter(AddExperience));
