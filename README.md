# string-changes-monitor

This tool checks whether a specified line in a specified file has been rewritten.

## Usage

To get started, you can use this minimal example:

```
- name: actions test
  uses: yokobot/string-changes-monitor@0.1.2
  with:
      file: overlays/dev/kustomization.yaml
      line: 13
      string: "    newTag: DUMMY"
```

## Inputs

| Input| Description | Default |
| ------------- | ------------- | ------------- |
| file | File to inspect rewritten strings. Include the path to the file. | None |
| line | The position of the line to be inspected in the file is specified by a number. The beginning of the line is 1. | None |
| string | String to be inspected. If there is a space before or after the string, the space must be included. | None |

## Example Workflow

```
on:
  pull_request:
    types:
      - opened
      - synchronize
      - reopened
    branches:
      - main
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: string check
        uses: yokobot/string-changes-monitor@v0.1.2
        with:
          file: overlays/dev/kustomization.yaml
          line: 13
          string: "    newTag: DUMMY"
```

## License

[MIT License](https://github.com/yokobot/string-changes-monitor/blob/main/LICENSE)
