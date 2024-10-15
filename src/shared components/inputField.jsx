const inputField = () => {
  return (
    <div className="w-full ">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text font-bold">Research Field</span>
        </div>
        <input
          type="text"
          placeholder="Enter coffee Category"
          name="research_field"
          className="input input-bordered w-full "
        />
      </label>
    </div>
  );
};

export default inputField;
