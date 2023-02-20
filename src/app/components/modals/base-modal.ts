export class BaseModal {
    isCancellable = false;
    isAcceptable = true;
    Header = "Title";
    Subheader = "";
    Content = "";
    CancelText = "Avbryt";
    ConfirmText = "OK";

    public constructor(init?:Partial<BaseModal>) {
        Object.assign(this, init);
    }
}
