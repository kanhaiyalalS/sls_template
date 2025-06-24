const { STAGE } = process.env;
const PROVISION_CONCURRENCY_ENABLED_STAGES = ['prod', 'dev'];

export function useProvisionConcurrency(): boolean {
  return PROVISION_CONCURRENCY_ENABLED_STAGES.includes(STAGE);
}
