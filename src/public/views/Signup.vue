<template>
  <Form @submit="submit" :validation-schema="schema">
    <div class="signup-card">
      <Card class="card-body">
        <template #title>
          <h3 class="t-balck">Sign UP</h3>
        </template>
        <template #content>
          <span class="p-float-label p-mb-6">
            <BaseInput
              name="name"
              type="text"
              v-model="name"
              className="b-border width-10"
              placeholder="Name *"
            />
          </span>
          <span class="p-float-label p-mb-6">
            <BaseInput
              name="email"
              type="text"
              v-model="email"
              className="b-border width-10"
              placeholder="Email *"
            />
          </span>
          <span class="p-float-label p-mb-6">
            <BaseInput
              name="password"
              type="password"
              v-model="password"
              className="b-border width-10"
              placeholder="Password *"
            />
          </span>
          <span class="p-float-label p-mb-6">
            <BaseInput
              name="confirmPassword"
              type="password"
              v-model="confirmPassword"
              className="b-border width-10"
              placeholder="Confirm Password *"
            />
          </span>
          <span class="p-float-label p-mb-6">
            <BaseInput
              v-model="phone"
              placeholder="Mobile Number *"
              name="phone"
             className="b-border width-10"
            />
          </span>
          <span class="p-float-label p-mb-6">
            <BaseInput
              name="companyName"
              type="text"
              v-model="companyName"
             className="b-border width-10"
              placeholder="Company Name *"
            />
          </span>
          <span class>
            <Button type="submit" class="width-10 p-mb-4 b-height">
              <label class="button-label">Register</label>
            </Button>
          </span>
          <span class="p-d-flex p-jc-center">
            Have you already account? &nbsp;
            <router-link :to="{ path: '/login' }">
              <label class="p-text-bold cursor-pointer">LOGIN HERE</label>
            </router-link>
          </span>
        </template>
      </Card>
    </div>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      companyName: "",
    };
  },
  components: { Form },
  methods: {
    submit(payload) {
      axios.post("http://api.epicai.com/site/signup", payload).then(
        (response) => {
          console.log("res", response);
          this.$router.push("/login");
        },
        (error) => {
          console.log("errors", error, error.response);
        }
      );
    },
  },
  setup() {
    const schema = Yup.object().shape({
      phone: Yup.string().min(1).required("phone is a required field."),
      companyName: Yup.string()
        .min(1)
        .required("company Name is a required field."),
      name: Yup.string().min(1).required("Name is a required field."),
      password: Yup.string().min(1).required("Password is a required field."),
      email: Yup.string().email().required("Email is a required field."),
    });

    return { schema };
  },
};
</script>

<style lang="scss">
.width-10 {
  width: 100%;
}

.signup-card {
left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  .card-body {
    width: 35rem;
    margin-bottom: 1em;

    background: #fffafab0;
    border-radius: 13px;
    .b-border {
      border: none;
      border-bottom: 1px solid;
      background-color: #cfc7c700;
    }
    .width-10 {
      width: 100%;
    }
    .b-height {
      height: 30px;
    }
    .login-bottom {
      display: flex;
      justify-content: space-between;

      margin-right: 5px;
    }
    .button-label {
      flex: 1 1 auto;
      font-size: 12px;
      font-weight: 500;
    }
  }
  .p-card .p-card-body {
    padding: 4rem;
  }
}
.a:hover,
a:focus,
a {
  text-decoration: none;
  color: #53a1ec;
}
.t-balck {
  color: black;
}
.cursor-pointer {
  cursor: pointer;
}
</style>