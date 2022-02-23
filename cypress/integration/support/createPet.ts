import {lorem, name, random} from "faker";

export default () => {
  return {id: lorem.words(1), name: name.firstName(), type: random.arrayElement(['dog', 'cat'])}
}
