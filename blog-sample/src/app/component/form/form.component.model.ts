export class FormConfig {
    public inputs: InputConfig[];
    public textarea: TextareaConfig;
    public button: ButtonConfig;
}

export class InputConfig {
    constructor(
    public id?: string,
    public label?: string,
    public placeholder?: string,
    public requiredMessage?: string) {}
}

export class TextareaConfig extends InputConfig {
    public numberOfLines: string;
}

export class ButtonConfig {
    constructor(public id?: string, public label?: string) {}
}
