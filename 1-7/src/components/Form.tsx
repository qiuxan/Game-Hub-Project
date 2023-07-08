import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  categories: string[];
  handleSubmitted: (data: any) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "description must be more than 3 characters" }),
  amount: z.number({ invalid_type_error: "amount field is required" }).min(18),
  category: z.string().min(4, { message: "selet a category" }),
});
type FormData = z.infer<typeof schema>;
function Form({ categories, handleSubmitted }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //   console.log(errors);

  const onSubmit = (data: FieldValues) => {
    handleSubmitted(data);
    // console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="categories" className="form-label">
          Categories
        </label>
        <select
          {...register("category")}
          id="categories"
          className="form-select"
          onChange={() => console.log("changed")}
        >
          <option>---</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
