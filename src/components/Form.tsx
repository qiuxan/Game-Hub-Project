import { useForm, FieldValues } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
}
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  //   console.log(errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type == "required" && (
          <p className="text-danger">Name field is required</p>
        )}
        {errors.name?.type == "minLength" && (
          <p className="text-danger">Name field is shorter than 3 letters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
