import template from 'babel-template';
import syntax from 'babel-plugin-syntax-dynamic-import';

const buildImport = template(`
    (Promise.resolve(require(SOURCE)))
`);

export default function() {
  return {
    inherits: syntax,

    visitor: {
        Import(path) {
            path.parentPath.replaceWith(buildImport({
                SOURCE: path.parentPath.node.arguments
            }));
        }
    }
  };
}
