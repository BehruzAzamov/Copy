import { Form,Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"

function Filter() {
  const {meta} = useLoaderData()
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <FormInput type="search" label="Search Product" name="search" size="input-sm"></FormInput>
        <FormSelect label="select category" name="category" size="select-sm" list={meta.categories}></FormSelect>
        <FormSelect label="select company" name="company" size="select-sm" list={meta.companies}></FormSelect>
        <FormSelect label="sort by" name="order" size="select-sm" list={['a-z','z-a','high',"low"]}></FormSelect>

        <button type="submit" className="btn btn-primary btn-sm">
            Search
        </button>
        <Link to="/products" className="btn btn-accent  btn-sm">Reset </Link>
    </Form>
  )
}

export default Filter