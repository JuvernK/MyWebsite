export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
  static readonly PYTHON = new Tag('Python', 'pink');
  static readonly JAVA = new Tag('Java', 'orange');
  static readonly C = new Tag('C', 'yellow');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString(): string {
    return this.key;
  }
}
