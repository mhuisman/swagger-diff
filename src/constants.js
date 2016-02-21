import path from 'path';


export const BREAK_RULES_DIR = path.join(__dirname, '/rules/break');
export const SMOOTH_RULES_DIR = path.join(__dirname, '/rules/smooth');

export const GLOBAL_KEYS = ['consumes', 'produces', 'schemes', 'security'];

export const PATHS_KEY = 'paths';
export const OPERATION_KEYS = ['get', 'post', 'put', 'delete', 'options', 'head', 'patch'];
export const PARAMETERS_KEY = 'parameters';

export const DEFINITIONS_KEY = 'definitions';
export const PROPERTIES_KEY = 'properties';

export const DEFAULT_CONFIG_PATH = '.swagger-diffrc';
