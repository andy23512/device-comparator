export type CrossReferenceContent = (
  | string
  | { type: 'url'; url: string; content: string }
  | { type: 'math'; content: string }
)[];

export type CrossReferenceKey =
  | 'm4g_switch_durability'
  | 'cc2_switch_durability'
  | 'cc1_switch_durability'
  | 'ccx_memory'
  | 'ccx_dependence'
  | 'ccx_size'
  | 'ccx_possible_input'
  | 'm4g_actuation_force'
  | 'cclite_memory'
  | 'cclite_switch'
  | 'cc2_size'
  | 'cc2_weight'
  | 'cclite_weight'
  | 'cclite_size'
  | 'cc2_half_material'
  | 'cc1_half_material'
  | 'cclite_base_material'
  | 'cclite_shell_material'
  | 'ccx_shell_material'
  | 'm4g_base_material'
  | 'm4g_shell_material'
  | 'sval_weight'
  | 'sval_size'
  | 'sval_input_style'
  | 'pointing_device'
  | 'm4g_pointing_device'
  | 'm4g_keys_per_switch'
  | 'm4g_number_of_3d_switches'
  | 'm4g_key_travel'
  | 'cc2_key_travel'
  | 'cc1_key_travel';
