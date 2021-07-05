<template>
  <Form @submit="submit" :validation-schema="schema">
    <div class="login-card">
      <Card class="card-body">
        <template #title>
          <h3 class="t-balck">Sign In</h3>
        </template>
        <template #content class="p-mx-3">
          <span class="p-float-label p-mb-6">
            <BaseInput
              id="inputtext"
              type="text"
              v-model="email"
              className="b-border width-100"
              name="email"
              placeholder="Email *"
            />
          </span>
          <span class="p-float-label p-mb-6">
            <BaseInput
              id="inputtext"
              type="password"
              v-model="password"
              className="b-border width-100"
              name="password"
              placeholder="Password *"
            />
          </span>

          <span class="p-mb-6">
            <Button
              type="submit"
              class="width-10 p-mb-4 b-height"
              label="LOG IN"
            ></Button>
          </span>
          <div class="login-bottom">
            <span>
              <div class="p-field-checkbox">
                <Checkbox
                  class="p-ml-2"
                  value="Remember me"
                  v-model="remember"
                />
                <label for="city2">Remember Me!</label>
              </div>
            </span>
            <router-link :to="{ path: '/' }">
              <span class="t-balck p-text-bold">Forgot Password</span>
            </router-link>
          </div>
          <span class="p-d-flex p-jc-center">
            Create an account? &nbsp;
            <router-link :to="{ path: '/signup' }">
              <label class="p-text-bold cursor-pointer">SIGNUP HERE</label>
            </router-link>
          </span>
        </template>
      </Card>
    </div>
  </Form>
</template>

<script lang="ts">
import { computed, onErrorCaptured, reactive, ref, toRefs, watch } from "vue";
import { Form } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "vue-router";

interface LoginPayload {
  employee: string;
  password: string;
  rememberMe: boolean;
}
export default {
  components: {
    Form,
  },

  data() {
    return {
      remember: [],
      name: "",
      password: "",
    };
  },

  setup(props: unknown, { emit }: { emit: any }) {
    const router = useRouter();
    const payload = reactive<LoginPayload>({
      employee: "",
      password: "",
      rememberMe: true,
    });
    const schema = Yup.object().shape({
      password: Yup.string()
        .min(1)
        .required("Password is a required field."),
      email: Yup.string()
        .email()
        .required("Email is a required field."),
    });
    const submit = (payload: any, action: any) => {
      axios.post("http://api.epicai.com/site/login", payload).then(
        (response) => {
          console.log("res", response);
          emit("authenticated", true);
          router.push("/");
        },
        (error) => {
          console.log("ddddd", error, error.response);

          if (error.response && error.response.status == 422) {
            if (Array.isArray(error.response.data)) {
              let fields = (error.response.data as any[]).reduce(
                (acc: Record<string, any>, msg: any) => {
                  console.log(msg);
                  let field = msg.field;
                  console.log("field", field);
                  // if (!acc[field]) {
                  acc[field] = msg.message;
                  // }

                  // acc[field].push(msg.message)
                  console.log("edata", acc, msg);
                  return acc;
                },
                {}
              );
              action.setErrors(fields);
            }
          }
        }
      );
    };
    return { schema, submit };
  },
};
</script>

<style lang="scss">
.login-card {
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
.p-inputtext :focus {
  outline: none;
}
</style>
