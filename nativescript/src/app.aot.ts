// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScript } from "nativescript-angular/platform-static";

import { NativeModuleNgFactory } from "./native.module.ngfactory";

platformNativeScript().bootstrapModuleFactory(NativeModuleNgFactory);
