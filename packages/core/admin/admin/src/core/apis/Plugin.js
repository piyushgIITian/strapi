class Plugin {
  constructor(pluginConf) {
    this.apis = pluginConf.apis || {};
    this.description = pluginConf.description;
    this.icon = pluginConf.icon;
    this.initializer = pluginConf.initializer || null;
    this.injectionZones = pluginConf.injectionZones || {};
    this.isReady = pluginConf.isReady !== undefined ? pluginConf.isReady : true;
    // TODO
    this.isRequired = pluginConf.isRequired;
    // TODO
    this.mainComponent = pluginConf.mainComponent || null;
    // TODO
    this.menu = pluginConf.menu || null;
    this.name = pluginConf.name;
    this.pluginId = pluginConf.id;
    this.pluginLogo = pluginConf.pluginLogo;
    // TODO
    this.settings = pluginConf.settings || null;
  }

  getInjectedComponents(containerName, blockName) {
    try {
      return this.injectionZones[containerName][blockName] || {};
    } catch (err) {
      console.error('Cannot get injected component', err);

      return err;
    }
  }

  injectComponent(containerName, blockName, compo) {
    try {
      this.injectionZones[containerName][blockName].push(compo);
    } catch (err) {
      console.error('Cannot inject component', err);
    }
  }
}

export default pluginConf => new Plugin(pluginConf);
