// prevent a module to be loaded more than once
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    const message = `${moduleName} has alread been loaded. Import modules in AppModule only.`;
    throw new Error(message);
  }
}
