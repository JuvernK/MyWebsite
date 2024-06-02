export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
  static readonly PYTHON = new Tag('Python', 'indianred');
  static readonly JAVA = new Tag('Java', 'orange');
  static readonly C = new Tag('C', 'green');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString(): string {
    return this.key;
  }
}
