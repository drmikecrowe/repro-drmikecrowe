/**
 * A generated module for Test functions
 */
import { dag, Container, Directory, object, func } from "@dagger.io/dagger"

@object()
class Test {
  @func()
  test(source: Directory): Container {
    return dag
      .container()
      .from('node:18-slim')
      .withExec(['corepack', 'enable'])
      .withExec(['corepack', 'prepare', 'yarn@latest', '--activate'])
      .withDirectory('/src', source)
  }
}
