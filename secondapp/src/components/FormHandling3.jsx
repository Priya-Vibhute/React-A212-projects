import React from "react";
import { useForm } from "react-hook-form";

function FormHandling3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const password=watch('password')
  const submitHadler = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHadler)}>
        <label htmlFor="">Enter name</label>
        <input
          type="text"
          {...register("username", {
            required: "username is required",
            minLength: {
              value: 2,
              message: "Minimum 2 characters are requuired",
            },
          })}
        />
        {errors.username && (
          <p className="text-danger">{errors.username.message}</p>
        )}

        <br />

        <label htmlFor="">Enter age</label>
        <input
          type="number"
          {...register("age", {
            required: "age is required",
            min: { value: 5, message: "minimum age 5 is required" },
            max: { value: 100, message: "age limit exceeds" },
          })}
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
        <br />

        <label htmlFor="">Enter city</label>
        <input
          type="text"
          {...register("city", { required: "city is required" })}
        />
        {errors.city && <p className="text-danger">{errors.city.message}</p>}
        <br />

        <label htmlFor="">Enter password</label>
        <input
          type="password"
          {...register("password", {
            required: "password is required",
            pattern: {
              value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
              message:
                "password should have minimum of 6 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number with no spaces.",
            },
          })}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
        <br />

        <label htmlFor="">Enter confirm password</label>
        <input
          type="text"
          {...register("confirmPassword", {
            required: "confirm password is required",
            validate:(value)=>value===password || 'password and confirm password is not same'
          })}
        />

        {errors.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword.message}</p>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}

export default FormHandling3;
